import React, { useState } from 'react';
// import { Form, message, Modal, Input, Button } from 'antd';
import { Form, Input, Modal, message,Button } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const AdminProject = () => {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;

  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);

  const onFinish = async (values) => {
    try {
      let response;

      if (selectedItemForEdit) {
        response = await axios.post(`${import.meta.env.VITE_API_URL}/api/portfolio/update-project`, {
          ...values,
          id: selectedItemForEdit._id,
        });
      } else {
        response = await axios.post(`${import.meta.env.VITE_API_URL}/api/portfolio/add-project`, values);
      }


      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
      } else {
        message.error(response.data.message);
      }
    } catch (err) {
    
      console.error('Error updating project:', err);
      message.error('Error updating project');
    }
  };

  const deleteProject = async (id) => {
    try {
      
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/portfolio/delete-project`, { id });


      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (err) {
      console.error('Error deleting project:', err);
      message.error('Error deleting project');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Button type="primary" onClick={() => {
          setShowAddEditModal(true);
          setSelectedItemForEdit(null);
        }}>
          Add Project
        </Button>
      </div>

      <div>
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <div key={project._id} style={{ marginBottom: '20px' }}>
              <h2>{project.title}</h2>
              <hr />
              <p>Desc: {project.description}</p>
              {project.image1 && (
                <div style={{ marginTop: '10px' }}>
                  <img src={project.image1} alt="project" style={{ width: '200px' }} />
                </div>
              )}
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <Button danger onClick={() => deleteProject(project._id)}>
                  Delete
                </Button>
                <Button
                  onClick={() => {
                    setSelectedItemForEdit(project);
                    setShowAddEditModal(true);
                  }}
                >
                  Edit
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>

      <Modal
        open={showAddEditModal}
        title={selectedItemForEdit ? 'Edit Project' : 'Add Project'}
        footer={null}
        onCancel={() => setShowAddEditModal(false)}
      >
        <Form
          initialValues={selectedItemForEdit || {}}
          layout="vertical"
          onFinish={onFinish}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Form.Item
            name="title"
            label="Project Name"
            rules={[{ required: true, message: 'Please enter project name' }]}
          >
            <Input placeholder="Enter Project Name" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Project Description"
            rules={[{ required: true, message: 'Please enter project description' }]}
          >
            <TextArea placeholder="Enter Project Description" />
          </Form.Item>

         

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <Button
              type="default"
              onClick={() => {
                setShowAddEditModal(false);
                setSelectedItemForEdit(null);
              }}
            >
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              {selectedItemForEdit ? 'Update' : 'Add'}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminProject;
