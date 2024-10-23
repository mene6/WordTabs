'use client';

import {
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
    PointerSensor,
    closestCenter,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import {
    SortableContext,
    arrayMove,
    horizontalListSortingStrategy,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Link } from '@inertiajs/react';
import { Plus, X } from 'lucide-react';
import React, { useState } from 'react';

import { ComboboxDropdownMenu } from '../../Components/widgets/create-post-widget';
import { NewTabCommandDialog } from '../../Components/widgets/new-tab-command-dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../Components/widgets/tabs';
import { Button } from './button';

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

export default function SortableTabs() {
    const [tabs, setTabs] = useState<Tab[]>([
        {
            id: 'new-tab-1',
            label: 'New Tab 1',
            content:
                <div className='flex flex-col space-y-4'>
                    <ComboboxDropdownMenu />
                    <NewTabCommandDialog tabId="new-tab-1" />
                </div>,
        },
    ]);
    const [activeTab, setActiveTab] = useState(tabs[0]?.id);
    const [activeDragId, setActiveDragId] = useState<string | null>(null);
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: { distance: 5 },
        })
    );

    const handleDragStart = (event: DragStartEvent) => {
        setActiveDragId(event.active.id as string);
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (active && over && active.id !== over.id) {
            setTabs((prevTabs) => {
                const oldIndex = prevTabs.findIndex((tab) => tab.id === active.id);
                const newIndex = prevTabs.findIndex((tab) => tab.id === over.id);

                return arrayMove(prevTabs, oldIndex, newIndex);
            });
        }

        requestAnimationFrame(() => {
            setActiveDragId(null);
        });
    };

    const handleAddTab = () => {
        const newTabNumber = tabs.length + 1;
        const newTabId = `new-tab-${newTabNumber}`;

        setTabs((prevTabs) => [
            ...prevTabs,
            {
                id: newTabId,
                label: `New Tab ${newTabNumber}`,
                content:
                    <div className='flex flex-col space-y-4'>
                        <ComboboxDropdownMenu />
                        <NewTabCommandDialog tabId="new-tab-1" />
                    </div>,
            },
        ]);
        setActiveTab(newTabId);
    };

    const handleCloseTab = (tabId: string) => {
        setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== tabId));

        if (activeTab === tabId) {
            const remainingTabs = tabs.filter((tab) => tab.id !== tabId);
            setActiveTab(remainingTabs.length > 0 ? remainingTabs[0].id : '');
        }
    };

    return (
        <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex flex-col items-center w-full tabs-wrapper">
                <div className="z-50 flex justify-between items-center space-x-2 bg-background/80 backdrop-blur p-2 w-full h-full tabs-header">
                    <Link href="/" className='flex flex-col justify-center items-center bg-primary dark:bg-primary rounded-sm min-w-[100px] h-9 text-white'>
                        Brand
                    </Link>
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCenter}
                        onDragStart={handleDragStart}
                        onDragEnd={handleDragEnd}
                        modifiers={[restrictToHorizontalAxis]}
                    >
                        <SortableContext
                            items={tabs.map((tab) => tab.id)}
                            strategy={horizontalListSortingStrategy}
                        >
                            <TabsList className="mx-auto">
                                {tabs.map((tab) => (
                                    <SortableTabTrigger
                                        key={tab.id}
                                        id={tab.id}
                                        value={tab.id}
                                        onClose={() => handleCloseTab(tab.id)}
                                        activeTab={activeTab}
                                        tabsLength={tabs.length}
                                    >
                                        {tab.label}
                                    </SortableTabTrigger>
                                ))}
                            </TabsList>
                            <Button
                                value="new-tab"
                                onClick={handleAddTab}
                                variant={"default"}
                                className='m-0 ml-2 py-0 pr-4 pl-3 h-10'>
                                <Plus width={20} height={20} className='mr-2' /> New Tab
                            </Button>
                        </SortableContext>
                        <DragOverlay
                            dropAnimation={{
                                duration: 0,
                                easing: 'ease',
                            }}
                        >
                            {activeDragId ? (
                                <TabDragOverlay
                                    label={tabs.find((tab) => tab.id === activeDragId)?.label || ''}
                                />
                            ) : null}
                        </DragOverlay>
                    </DndContext>
                </div>

                {tabs.map((tab) => (
                    <TabsContent key={tab.id} value={tab.id} className='w-full max-w-4xl'>
                        {tab.content}
                    </TabsContent>
                ))}
            </div>
        </Tabs>
    );
}

interface SortableTabTriggerProps {
    id: string;
    value: string;
    children: React.ReactNode;
    onClose: () => void;
    activeTab: string;
    tabsLength: number;
}

function SortableTabTrigger({
    id,
    value,
    children,
    onClose,
    activeTab,
    tabsLength,
}: SortableTabTriggerProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id,
    });

    const style: React.CSSProperties = {
        transform: CSS.Transform.toString(transform),
        transition: isDragging ? undefined : transition,
        touchAction: 'none',
        visibility: isDragging ? 'hidden' : 'visible',
        display: 'flex',
        alignItems: 'center',
    };

    const handleCloseClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClose();
    };

    const isActive = value === activeTab;

    return (
        <TabsTrigger
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            value={value}
        >
            <span style={{ marginRight: '8px' }}>{children}</span>
            {isActive && tabsLength > 1 && (
                <X
                    size={18}
                    onClick={handleCloseClick}
                    style={{ cursor: 'pointer', color: 'hsl(var(--destructive))' }}
                    aria-label="Close tab"
                />
            )}
        </TabsTrigger>
    );
}

interface TabDragOverlayProps {
    label: string;
}

function TabDragOverlay({ label }: TabDragOverlayProps) {
    return (
        <div
            className="inline-flex justify-center items-center bg-background shadow-sm px-3 py-1.5 rounded-sm font-medium text-foreground text-sm whitespace-nowrap"
            style={{
                whiteSpace: 'nowrap',
            }}
        >
            {label}
        </div>
    );
}
