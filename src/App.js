import axios from "axios";
import { useEffect, useState } from "react";
import "antd/dist/antd.css";
import {
  Table,
  Spin,
  Button,
  Form,
  Input,
  Checkbox,
  Modal,
  Pagination,
} from "antd";
import { URL_DATA } from "./config";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [visible, setVisible] = useState(false);
  const [reload, setReload] = useState(false);
  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoad(true);
        const values = await axios.get(
          "https://api-bms-dev.webdigital.vn/cms/api/v1/sports/"
        );
        setData(values.data.results);
        setLoad(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [reload]);

  console.log(data);

  // const dataSource = [
  //   ...data.map((item) => {
  //     return {
  //       key: item.key,
  //       name: item.name,
  //       description: item.description,
  //       // action: (
  //       //   <div>
  //       //     <Button>
  //       //       <EditOutlined />
  //       //     </Button>
  //       //     <Button onClick={() => handleDeleteItem(item.sid)}>
  //       //       <DeleteOutlined />
  //       //     </Button>
  //       //   </div>
  //       // ),
  //     };
  //   }),
  // ];

  // console.log(dataSource);

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
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    // {
    //   title: "Action",
    //   dataIndex: "action",
    //   key: "action",
    // },
  ];
  // const handleDeleteItem = async (id) => {
  //   try {
  //     await axios.delete(
  //       `https://api-bms-dev.webdigital.vn/cms/api/v1/sports/${id}/`
  //     );
  //     setReload(!reload);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleAddSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     await axios.post(URL_DATA, { key, name, description: des });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setKey("");
  //   setName("");
  //   setDes("");
  //   setVisible(false);
  //   setReload(!reload);
  // };
  return (
    <div className="App">
      {/* {data && data.length > 0 && <Pagination total={10} />} */}
      {/* <Table
        dataSource={dataSource}
        loading={load ? true : false}
        columns={columns}
        pagination
      ></Table> */}
      {/* <Button className="" onClick={() => setVisible(true)}>
        Add Item
      </Button> */}
      {/* <Modal
        title="Add Item"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={500}
      >
        <div className="mt-5 max-w-[500px] mx-auto">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                placeholder="Key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
            </Form.Item>

            <Form.Item
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                placeholder="Description"
                value={des}
                onChange={(e) => setDes(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                onClick={handleAddSubmit}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal> */}
    </div>
  );
}

export default App;
