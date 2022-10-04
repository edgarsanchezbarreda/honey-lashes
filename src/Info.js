import React from 'react';

export const Info = () => {
    return (
        <div className='flex flex-row-reverse mx-10 pt-32'>
            <div className='flex flex-col w-1/2 pl-12'>
                <h2 className='text-4xl font-latoLight'>HONEY LASHES</h2>
                <h3 className='text-md font-latoLight pt-8 pb-6'>
                    HELLO, MY NAME IS HILDA
                </h3>
                <p className='font-gothamLight text-xs'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint nesciunt animi sit maxime quam, quis sapiente
                    obcaecati? Molestiae voluptate placeat qui. Itaque quibusdam
                    sed aperiam iusto? Praesentium autem quaerat nihil!
                </p>
                <p className='font-gothamLight text-xs pt-6'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint nesciunt animi sit maxime quam, quis sapiente
                    obcaecati? Molestiae voluptate placeat qui. Itaque quibusdam
                    sed aperiam iusto? Praesentium autem quaerat nihil!
                </p>
            </div>
            {/* <div className='flex flex-col items-end pr-16'>
                <h2 className='text-4xl  font-latoLight'>HONEY LASHES</h2>
                <p>Hello World</p>
            </div> */}
        </div>
    );
};
