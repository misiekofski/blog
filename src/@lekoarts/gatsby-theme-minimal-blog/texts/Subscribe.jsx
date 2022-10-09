import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Form, Input, Button, Divider } from 'antd'
import { UserOutlined, MailOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

export default class Subscribe extends React.Component {
  constructor() {
    super()
    this.state = { name: '', email: '', result: null }
  }

  handleSubmit = async (e) => {
    const result = await addToMailchimp(this.state.email, { FNAME: this.state.name })
    if (result.result === 'error') {
      alert(`Whoops, ${this.state.name} you're already subscribed!`)
    } else {
      alert(`Thank you for subscribing ${this.state.name}!`)
    }
    this.setState({ result: result })
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value })
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
      <React.Fragment>
        <div className="subscribe">
          <h3 className="subscribeInfo">
            I promise: no ads, no commercial content, your data stays solely with me.
            <br />
            Quality content (in text format) directly to your mail inbox.
          </h3>
          <Form name="subscribe" onFinish={this.handleSubmit} layout="horizontal">
            <Form.Item
              label="E-mail"
              name="email"
              rules={[{ required: true, message: 'Please input your email.' }]}
            >
              <Input prefix={<MailOutlined />} onChange={this.handleEmailChange} />
            </Form.Item>

            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name.' }]}
            >
              <Input prefix={<UserOutlined />} onChange={this.handleNameChange} />
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit" size='large'>
                Subscribe
              </Button>
            </Form.Item>
          </Form>
        </div>
      </React.Fragment>
    )
  }
}
