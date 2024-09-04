'use client'

import React, { useState } from 'react';

const TabWidget = () => {
    const [activeTab, setActiveTab] = useState(1); // Default active tab is Tab1

    return (
        <>
            <div className="bg-[#363C46] me-10 rounded-3xl w-full">
                {/* Tab names */}
                <div className="w-[80%] mx-auto mb-10">
                    <ul className="flex justify-around rounded-3xl m-4 bg-[#171717] text-white">
                        <li
                            className={`px-8 py-4 cursor-pointer ${activeTab === 1 ? 'bg-[#555] rounded-3xl my-1' : ''}`}
                            onClick={() => setActiveTab(1)}
                        >
                            About me
                        </li>
                        <li
                            className={`px-8 py-4 cursor-pointer ${activeTab === 2 ? 'bg-[#555] rounded-3xl my-1' : ''}`}
                            onClick={() => setActiveTab(2)}
                        >
                            Experience
                        </li>
                        <li
                            className={`px-8 py-4 cursor-pointer ${activeTab === 3 ? 'bg-[#555] rounded-3xl my-1' : ''}`}
                            onClick={() => setActiveTab(3)}
                        >
                            Recommended
                        </li>
                    </ul>
                </div>

                {/* Tab content */}
                <div className="w-[75%] h-[250px] overflow-scroll overflow-x-hidden text-white mx-auto">
                    {activeTab === 1 && (
                        <div className='mb-10'>
                            <p className='pb-10'>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
                            <br />
                            <p>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div className='mb-10'>
                            <p>Experienced Software Developer with 5+ years of expertise, adept at delivering high-quality solutions, with a focus on scalable web applications. Achieved a 20% increase in user engagement and a 15% decrease in page load times. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi error commodi eius atque reprehenderit quisquam delectus in sunt a aliquam illum, necessitatibus fugiat, quo est, itaque inventore molestiae minus optio amet dolore adipisci at pariatur velit? Cumque quaerat dolorem iusto, odit aut dignissimos perspiciatis dolor modi ea magni. Corrupti, iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat distinctio tempora vel officiis maiores excepturi deserunt sapiente laborum! Sunt doloribus magnam numquam vitae quaerat! Maiores fugiat similique quia, officiis necessitatibus impedit delectus ad, alias aliquid vel possimus natus atque cumque veritatis animi porro ipsum ipsa in tempora laudantium molestiae vero eum? Doloribus, blanditiis et? Voluptate laboriosam sapiente ipsum tempora nemo? Explicabo vel voluptatem, aliquid nisi facilis consequatur quibusdam accusantium quo fuga porro nostrum? Nostrum dicta neque temporibus omnis iste ad consequatur sed suscipit ducimus ipsa porro molestias aut, error voluptatibus dolor rem veritatis nemo, ea consequuntur? Dicta ipsum alias optio autem corporis fugit reiciendis voluptates, nesciunt hic modi deleniti asperiores, necessitatibus, corrupti voluptatibus doloremque molestiae consequuntur veniam at! Architecto deleniti nisi assumenda hic laudantium doloribus, molestias dolores consequuntur eligendi similique! Esse, dolorum. Sit error ipsum dolore obcaecati corporis rerum dicta amet quos ut hic. Quos in ipsa molestias consequuntur cupiditate, velit dolorem culpa veritatis praesentium! Porro rerum magnam vero, ab vitae sequi cupiditate deleniti minus ullam nulla quos omnis aperiam repellat, impedit commodi ducimus ut assumenda dicta reprehenderit dignissimos? Illum, modi qui voluptatum iusto inventore facilis, rerum fugiat omnis voluptates totam assumenda ullam doloribus, veniam enim eveniet culpa atque molestiae.
                            </p>
                        </div>
                    )}
                    {activeTab === 3 && (
                        <div className='mb-10'>
                            <p>He is friendly, easy to get along with, well-liked by our clients and respected by his co-workers. Forever the student, Dean takes courses frequently to stay up-to-date on the latest techniques in software development. He is able to thoroughly focus on every project and is not easily distracted.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default TabWidget;
