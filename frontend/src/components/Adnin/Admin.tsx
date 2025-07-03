import { useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL

export const Admin = (): JSX.Element => {
    const [formData, setFormData] = useState({
        _id: undefined,
        views: "",
        viewsdiff: "",
        watchtime: "",
        watchtimediff: "",
        subscribers: "",
        subscribersdiff: "",
        last48: "",
        totalsubscribers: ""
    });

    useEffect(() => {
        fetch(`${apiUrl}/analyticvalue`)
            .then((res) => res.json())
            .then((data) => {
                setFormData({
                    _id: data[0]?._id,
                    views: data[0]?.views ?? 0,
                    viewsdiff: data[0]?.viewsdiff ?? 0,
                    watchtime: data[0]?.watchtime ?? 0,
                    watchtimediff: data[0]?.watchtimediff ?? 0,
                    subscribers: data[0]?.subscribers ?? 0,
                    subscribersdiff: data[0]?.subscribersdiff ?? 0,
                    last48: data[0]?.last48 ?? 0,
                    totalsubscribers: data[0]?.totalsubscribers ?? 0
                })
            })
            .catch((err) => console.error('Fetch error:', err));
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send this data to your backend
        console.log("Submitted data:", formData);

        fetch(`${apiUrl}/analyticvalue`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Settings updated successfully!");
            })
            .catch((err) => console.error('Fetch error:', err));
    };

    return (
        <div className="p-8 bg-[#282828] text-white">
            <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

            <div className="bg-[#383838] p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Channel Statistics Settings</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="views" className="block text-sm font-medium">
                                Views
                            </label>
                            <input
                                type="number"
                                id="views"
                                name="views"
                                value={formData.views}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#1f1f1f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter number of views"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="viewsdiff" className="block text-sm font-medium">
                                Usual
                            </label>
                            <input
                                type="number"
                                id="viewsdiff"
                                name="viewsdiff"
                                value={formData.viewsdiff}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#1f1f1f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter number of usual"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="watchtime" className="block text-sm font-medium">
                                Watch time
                            </label>
                            <input
                                type="number"
                                id="watchtime"
                                name="watchtime"
                                value={formData.watchtime}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#1f1f1f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter number of watchtime"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="watchtimediff" className="block text-sm font-medium">
                                Usual
                            </label>
                            <input
                                type="number"
                                id="watchtimediff"
                                name="watchtimediff"
                                value={formData.watchtimediff}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#1f1f1f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter number of usual"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subscribers" className="block text-sm font-medium">
                                Subscribers plus in the last 28 days
                            </label>
                            <input
                                type="number"
                                id="subscribers"
                                name="subscribers"
                                value={formData.subscribers}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#1f1f1f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter number of last 28 days subscribers"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subscribersdiff" className="block text-sm font-medium">
                                Subscribers plus in previous 28 days
                            </label>
                            <input
                                type="number"
                                id="subscribersdiff"
                                name="subscribersdiff"
                                value={formData.subscribersdiff}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#1f1f1f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter number of previous 28 days subscribers"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="totalsubscribers" className="block text-sm font-medium">
                                Total Subscribers
                            </label>
                            <input
                                type="number"
                                id="totalsubscribers"
                                name="totalsubscribers"
                                value={formData.totalsubscribers}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#1f1f1f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter number of total subscribers"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="last48" className="block text-sm font-medium">
                                Last 48 hours views
                            </label>
                            <input
                                type="number"
                                id="last48"
                                name="last48"
                                value={formData.last48}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#1f1f1f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter number of views in last 48 hours"
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Save Values
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};