import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  DatePicker,
  Select,
  Button,
} from "antd";

function AddExpenseModal({
  isExpenseModalVisible,
  handleExpenseCancel,
  onFinish,
}) {
  const [form] = Form.useForm();
  
  // State to keep track of added custom tags
  const [customTags, setCustomTags] = useState([]);

  const handleCustomTagChange = (value) => {
    // Handle changes to custom tags if needed
    setCustomTags(value);
  };

  return (
    <Modal
      style={{ fontWeight: 600 }}
      title="Add Expense"
      visible={isExpenseModalVisible}
      onCancel={handleExpenseCancel}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={(values) => {
          onFinish(values, "expense"); // Pass form values including custom tags
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
          rules={[{ required: true, message: "Please input the expense amount!" }]}
        >
          <Input type="number" className="custom-input" />
        </Form.Item>

        <Form.Item
          style={{ fontWeight: 600 }}
          label="Date"
          name="date"
          rules={[{ required: true, message: "Please select the expense date!" }]}
        >
          <DatePicker className="custom-input" format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item
          label="Tag"
          name="tag"
          style={{ fontWeight: 600 }}
          rules={[{ required: true, message: "Please select or input a tag!" }]}
        >
          <Select
            className="select-input-2"
            mode="tags" // Allows for user input of custom tags
            tokenSeparators={[',']} // Allows multiple tags separated by commas
            placeholder="Select or type a tag"
            value={customTags} // Manage selected/custom tags in state
            onChange={handleCustomTagChange} // Update custom tags state when the user types
          >
            {/* Predefined tags */}
            <Select.Option value="food">Food</Select.Option>
            <Select.Option value="education">Education</Select.Option>
            <Select.Option value="office">Office</Select.Option>
            <Select.Option value="transport">Transport</Select.Option> {/* Added new tag */}
            <Select.Option value="shopping">Shopping</Select.Option> {/* Added new tag */}
            <Select.Option value="health">Health</Select.Option> {/* Added new tag */}
            <Select.Option value="entertainment">Entertainment</Select.Option> {/* Added new tag */}
            <Select.Option value="bills">Bills</Select.Option> {/* Added new tag */}
            {/* Add as many tags as you need */}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button className="btn btn-blue" type="primary" htmlType="submit">
            Add Expense
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddExpenseModal;
