'use client'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./TabWidget.css"

const TabWidget = () => {
    return (
        <Tabs className="bg-[#363C43]">
            <TabList className="bg-[#171717] flex gap-4 text-[#ffffff]">
                <Tab selectedClassName="active-tab">About me</Tab>
                <Tab selectedClassName="active-tab">Experience</Tab>
                <Tab selectedClassName="active-tab">Recommend</Tab>
            </TabList>

            <TabPanel>
                <span>
                    <p>
                        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                    </p>
                    <p>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
                </span>
            </TabPanel>
            <TabPanel>
                <span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio architecto, ducimus rem voluptatem praesentium magnam, recusandae nisi expedita, quasi illum perferendis libero? Fugiat architecto sint inventore laborum minima assumenda autem tenetur! Est sapiente voluptas culpa unde. Natus voluptatum quibusdam harum nemo porro suscipit molestiae, iusto in nobis. Voluptas, reprehenderit omnis.</p>
                </span>
            </TabPanel>
            <TabPanel>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quae similique autem? Officiis, soluta! Fugit ad quisquam, doloribus, reiciendis expedita, autem maxime inventore veniam ea est non consequuntur velit recusandae. Tempore, neque quo, earum velit nihil ducimus rerum reprehenderit consequatur natus, ea nesciunt accusantium magnam laboriosam. Cumque quisquam voluptatum voluptatem.</p>
            </TabPanel>
        </Tabs>
    );
};

export default TabWidget;