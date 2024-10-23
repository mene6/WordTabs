'use client';

import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/Components/ui/command';
import { Input } from '@/Components/ui/input'; // Ensure you have this component
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';

interface NewTabCommandDialogProps {
    tabId: string;
}

const createOptions = ['Document', 'Endpoint', 'Object', 'Plugin', 'User'];
const settingsOptions = ['Plugins', 'Reading', 'Writing', 'Version Control'];

export function NewTabCommandDialog({ tabId }: NewTabCommandDialogProps) {
    const [selectedOption, setSelectedOption] = useState<string>('Document');
    const [title, setTitle] = useState('');

    const handleCreate = () => {
        console.log(`Creating ${selectedOption} with title: ${title}`);
    };

    return (
        <div className="flex">
            <Command className="shadow-md border rounded-lg w-full">
                {/* Typing field for the title */}
                <div className="space-y-4 p-4">
                    <p className="m-b-2 text-muted-foreground text-sm">
                        Create a new {selectedOption}:
                    </p>
                    <Input
                        placeholder={`${selectedOption} Title`}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <CommandList>
                    <CommandGroup heading="Types">
                        {/* Radio buttons with labels next to them */}
                        <div className="flex flex-col space-y-2 p-2">

                            {createOptions.map((option) => (
                                <label key={option} className="flex items-center">
                                    <input
                                        type="radio"
                                        name="createType"
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={() => setSelectedOption(option)}
                                        className="mr-2"
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        {settingsOptions.map((option) => (
                            <CommandItem key={option}>
                                <span>{option}</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
                {/* Add a create button */}
                <div className="p-4">
                    <Button
                        onClick={handleCreate}
                        className="flex"
                        variant={'default'}
                    >
                        <Plus className="mr-2" size={16} />
                        Create {selectedOption}
                    </Button>
                </div>
            </Command>
        </div>
    );
}
