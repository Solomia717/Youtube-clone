import { useState } from "react";

export const Admin = (): JSX.Element => {
    const [formData, setFormData] = useState({
        views: "",
        watchTime: "",
        subscribers: "",
        likes: "",
        comments: "",
        shares: ""
    });

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
        alert("Settings updated successfully!");
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
                            <label htmlFor="watchTime" className="block text-sm font-medium">
                                Watch Time (hours)
                            </label>
                            <input
                                type="number"
                                id="watchTime"
                                name="watchTime"
                                value={formData.watchTime}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#1f1f1f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter watch time in hours"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subscribers" className="block text-sm font-medium">
                                Subscribers
                            </label>
                            <input
                                type="number"
                                id="subscribers"
                                name="subscribers"
                                value={formData.subscribers}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#1f1f1f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter number of subscribers"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="likes" className="block text-sm font-medium">
                                Likes
                            </label>
                            <input
                                type="number"
                                id="likes"
                                name="likes"
                                value={formData.likes}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#1f1f1f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter number of likes"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="comments" className="block text-sm font-medium">
                                Comments
                            </label>
                            <input
                                type="number"
                                id="comments"
                                name="comments"
                                value={formData.comments}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#1f1f1f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter number of comments"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="shares" className="block text-sm font-medium">
                                Shares
                            </label>
                            <input
                                type="number"
                                id="shares"
                                name="shares"
                                value={formData.shares}
                                onChange={handleChange}
                                className="w-full px-3 py-2 bg-[#1f1f1f] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter number of shares"
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            Save Settings
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};