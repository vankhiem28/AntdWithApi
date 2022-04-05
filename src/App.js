import axios from "axios";
import { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table, Spin, Button, Form, Input, Checkbox } from "antd";
import { GET_DATA } from "./config";

function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoad(true);
        const values = await axios.get(GET_DATA);
        setData(values.data.results);
        setLoad(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  console.log(data);

  const dataSource = [
    ...data.map((item) => {
      return {
        key: item.key,
        name: item.name,
        description: item.description,
      };
    }),
  ];

  console.log(dataSource);

  const columns = [
    {
      title: "Key",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
    },
  ];

  return (
    <div className="App">
      <Button className="">Add Item</Button>
      <div className="mt-5 max-w-[500px] mx-auto">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Key" />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input placeholder="Description" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Table
        dataSource={dataSource}
        loading={load ? true : false}
        columns={columns}
        pagination
      ></Table>
    </div>
  );
}

export default App;
