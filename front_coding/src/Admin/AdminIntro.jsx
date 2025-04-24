import { Form, Input } from 'antd'
import React from 'react'
import './admin.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { message } from 'antd';

const AdminIntro = () => {
    // const dispatch= useDispatch();
    const { portfolioData } = useSelector((state) => state.root)

    
    const onFinish = async (values) => {
        console.log(values)
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/portfolio/update-intro`, {
                ...values,
                _id : portfolioData?.intros._id,
                
            });
            if (response.data.success) {
                message.success(response.data.message)
                console.log(values)
            } else {
                message.error(response.data.message)
                
               
            }
        } catch (error) {
            message.error(error.message)
           
            

        }
    };  
    return (
        <div>
            <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.intros}>
                <Form.Item name='welcomeText' label="Intro">
                    <input placeholder='Intro' />
                </Form.Item>
                
                <Form.Item name='description' label='description'>
                    <textarea placeholder='description' />
                </Form.Item>
                <Form.Item name='lottieURL'>
            <input placeholder='url'/>

        </Form.Item>
                <div className="flex justify-end w-full">
                    <button className='px-10 py-2 bg-black text-white ' type='submit'>SAVE</button>
                </div>
            </Form>
        </div>
    )
}

export default AdminIntro
