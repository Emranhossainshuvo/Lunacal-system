'use client'

const TabWidget = () => {


    return (
        <div role="tablist" className="tabs tabs-bordered">
            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="About" />

            <div role="tabpanel" className="tab-content p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, mollitia magni earum beatae quos quaerat facilis? Impedit velit fuga harum obcaecati nemo expedita a quae, aspernatur id aut accusantium, ut deleniti fugit distinctio excepturi omnis voluptatem eum iure recusandae consequuntur?</div>

            <input
                type="radio"
                name="my_tabs_1"
                role="tab"
                className="tab"
                aria-label="Experiences"
                defaultChecked />
            <div role="tabpanel" className="tab-content p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur soluta delectus ea dicta at commodi animi magni dolores molestias? Beatae eius iusto nisi similique, excepturi quia error corrupti! Quod magnam iste dignissimos aperiam laudantium doloremque dolore, possimus labore architecto.</div>

            <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Recommended" />
            <div role="tabpanel" className="tab-content p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam porro, doloribus perferendis provident necessitatibus minus deserunt odit reprehenderit atque ipsa harum commodi sint vero, iure explicabo rerum hic maiores similique quisquam labore blanditiis nam distinctio minima! Expedita doloribus magnam at!</div>
        </div>
    );
};

export default TabWidget;