import { Form, Input } from 'antd'
import React from 'react'
import './admin.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { message } from 'antd';

const AdminAbout = () => {
    // const dispatch= useDispatch();
    const { portfolioData } = useSelector((state) => state.root)

    
    const onFinish = async (values) => {
        console.log(values)
        try {
            const response = await axios.post("http://localhost:8000/api/portfolio/update-about", {
                ...values,
                _id : portfolioData?.about._id,
            });
            if (response.data.success) {
                message.success(response.data.message)
                
            } else {
                message.error(response.data.message)                  
            }
        } catch (error) {
            message.error(error.message)
           
            

        }
    };  
    return (
        <div>
            <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.about}>
                
                <Form.Item name='description1' label='description'>
                    <textarea placeholder='description' />
                </Form.Item>
                
                <div className="flex justify-end w-full">
                    <button className='px-10 py-2 bg-black text-white ' type='submit'>SAVE</button>
                </div>
            </Form>
        </div>
    )
}

export default AdminAbout
