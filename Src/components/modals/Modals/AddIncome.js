import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
  Button,
} from "antd";

function AddIncomeModal({
  isIncomeModalVisible,
  handleIncomeCancel,
  onFinish,
}) {
  const [form] = Form.useForm();
  
  // State to keep track of added custom tags
  const [customTags, setCustomTags] = useState([]);

  const handleCustomTagChange = (value) => {
    // Update custom tags when the user types new tags
    setCustomTags(value);
  };

  return (
    <Modal
      style={{ fontWeight: 600 }}
      title="Add Income"
      visible={isIncomeModalVisible}
      onCancel={handleIncomeCancel}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={(values) => {
          onFinish(values, "income"); // Pass form values including custom tags
          form.resetFields();
        }}
      >
        <Form.Item
          style={{ fontWeight: 600 }}
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input the name of the transaction!" }]}
        >
          <Input type="text" className="custom-input" />
        </Form.Item>

        <Form.Item
          style={{ fontWeight: 600 }}
          label="Amount"
          name="amount"
          rules={[{ required: true, message: "Please input the income amount!" }]}
        >
          <Input type="number" className="custom-input" />
        </Form.Item>

        <Form.Item
          style={{ fontWeight: 600 }}
          label="Date"
          name="date"
          rules={[{ required: true, message: "Please select the income date!" }]}
        >
          <DatePicker format="YYYY-MM-DD" className="custom-input" />
        </Form.Item>

        <Form.Item
          style={{ fontWeight: 600 }}
          label="Tag"
          name="tag"
          rules={[{ required: true, message: "Please select or input a tag!" }]}
        >
          <Select
            className="select-input-2"
            mode="tags" // Allows user input of custom tags
            tokenSeparators={[',']} // Allows multiple tags separated by commas
            placeholder="Select or type a tag"
            value={customTags} // Manage selected/custom tags in state
            onChange={handleCustomTagChange} // Update custom tags state when user types
          >
            {/* Predefined tags */}
            <Select.Option value="salary">Salary</Select.Option>
            <Select.Option value="freelance">Freelance</Select.Option>
            <Select.Option value="investment">Investment</Select.Option>
            <Select.Option value="bonus">Bonus</Select.Option> {/* Added new tag */}
            <Select.Option value="gift">Gift</Select.Option> {/* Added new tag */}
            {/* You can add more predefined tags here */}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button className="btn btn-blue" type="primary" htmlType="submit">
            Add Income
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddIncomeModal;
