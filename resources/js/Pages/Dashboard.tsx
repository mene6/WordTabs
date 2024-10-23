import { DashChart1 } from '@/Components/charts/dashchart1';
import { DashChart2 } from '@/Components/charts/dashchart2';
import { DashChart3 } from '@/Components/charts/dashchart3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2>
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="flex flex-col space-y-2 padding">
                <DashChart1 />
                <div className='gap-2 grid grid-cols-2 m-0 w-full'>
                    <DashChart2 />
                    <DashChart3 />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
