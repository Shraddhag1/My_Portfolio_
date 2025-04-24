import { Form, Input, Modal, message } from 'antd';
import React, { useState } from 'react';
import './admin.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const Adminskills = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { education } = portfolioData;

  const skills = education?.[0]?.skill || [];
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);

  const onFinish = async (values) => {
    try {
      const response = await axios.post(apiUrl+`api/portfolio/add-skills`, {
        skill: values.name,
        _id: education?.[0]?._id,
        skills: [values.name], // assuming you want to send an array
      });

      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <div className="relative mt-5 flex flex-wrap gap-5">
      {/* Top Right Button */}
      <div className="absolute top-0 right-0">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => {
            setShowAddEditModal(true);
            setSelectedItemForEdit(null);
          }}
        >
          Add Skill
        </button>
      </div>

      {/* Skill Tags */}
      {skills.length > 0 ? (
        skills.map((skill, index) => (
          <div
            key={index}
            className="border-2 border-blue-950 py-3 px-10 ml-2 flex items-center justify-center"
          >
            <h1 className="text">{skill}</h1>
          </div>
        ))
      ) : (
        <p>No skills available</p>
      )}

      {/* Modal for Adding/Editing Skills */}
      <Modal
        open={showAddEditModal}
        title={selectedItemForEdit ? 'Edit Skill' : 'Add Skill'}
        footer={null}
        onCancel={() => setShowAddEditModal(false)}
      >
        <Form
          initialValues={selectedItemForEdit}
          layout="vertical"
          onFinish={onFinish}
          className="flex flex-col"
        >
          <Form.Item
            name="name"
            label="Skill"
            rules={[{ required: true, message: 'Please enter skill name' }]}
          >
            <Input placeholder="Enter Skill Name" />
          </Form.Item>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              className="border px-4 py-1 rounded"
              onClick={() => {
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              {selectedItemForEdit ? 'Update' : 'Add'}
            </button>
          </div>
        
        </Form>
      </Modal>
    </div>
  );
};

export default Adminskills;


