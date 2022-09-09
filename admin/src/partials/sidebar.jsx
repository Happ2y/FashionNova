// dependencies
import React from 'react'
import styled from 'styled-components'

// styled components
const Container = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
`

const Wrapper = styled.div`
    padding: 5px 20px;
`

const Menu = styled.div``

const Title = styled.p`
    font-size: 25px;
`

const Ul = styled.ul`
    list-style: none;
    width: 50%;
`

const Li = styled.li`
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    &:hover{
        background-color: lightgray;
    }
`

// sidebar driver code
const Sidebar = () => {
    return (
        <Container>
            <Wrapper>
                <Menu>
                    <Title>Dashboard</Title>
                    <Ul>
                        <Li>Home</Li>
                        <Li>Products</Li>
                        <Li>Add Product</Li>
                        <Li>Users</Li>
                    </Ul>
                </Menu>
                <Menu>
                    <Title>Quick Links</Title>
                    <Ul>
                        <Li>Settings</Li>
                        <Li>Mail</Li>
                        <Li>Feedback</Li>
                        <Li>Report</Li>
                    </Ul>
                </Menu>
                <Menu>
                    <Title>Notifications</Title>
                    <Ul>
                        <Li>Transactions</Li>
                        <Li>Staffs</Li>
                        <Li>Projects</Li>
                        <Li>Problems</Li>
                    </Ul>
                </Menu>
                <Menu>
                    <Title>Management</Title>
                    <Ul>
                        <Li>Mail</Li>
                        <Li>Feedback</Li>
                        <Li>Messages</Li>
                    </Ul>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default Sidebar