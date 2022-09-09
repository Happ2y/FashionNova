// dependencies
import React from 'react'
import styled from 'styled-components'

// temporary data
import { categories, colors, sizes } from '../data'

// styled components
const Container = styled.div`
    flex: 4;
`

const Title = styled.h1``

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

const Attribute = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 20px 20px 0px;
`

const Label = styled.label`
    font-size: large;
    margin-bottom: 5px;
`

const Input = styled.input`
    height: 40px;
    font-size: 15px;
    color: black;
`

const TextArea = styled.textarea`
    width: 100%;
    font-size: 15px;
    color: black;
`

const Select = styled.select`
    height: 40px;
    font-size: 15px;
    color: black;
`

const Option = styled.option``

const CheckboxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
`

const CheckboxContainerItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

const ButtonGroup = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
`

const Reset = styled.button`
    color: white;
    background-color: black;
    padding: 10px;
    cursor: pointer;
`

const Submit = styled.button`
    color: white;
    background-color: green;
    padding: 10px;
    cursor: pointer;
    border: 0;
`

const product = {
    id: 1,
    image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
    title: "MEN PRODUCTS",
    price: 30,
    inStock: false,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laboriosam officia, asperiores distinctio pariatur velit delectus exercitationem itaque cumque similique!",
    color: ["red", "blue"],
    size: ["S", "L"],
    category: ["popular", "men"]
}

// edit product driver code
const EditProduct = () => {
    return (
        <Container>
            <Title>Edit Product</Title>
            <Form>
                <Attribute>
                    <Label>Title</Label>
                    <Input type='text' defaultValue={product.title} />
                </Attribute>
                <Attribute>
                    <Label>Description</Label>
                    <TextArea rows='5' defaultValue={product.description}></TextArea>
                </Attribute>
                <Attribute>
                    <Label>Price (INR)</Label>
                    <Input type='number' defaultValue={product.price} />
                </Attribute>
                <Attribute>
                    <Label>Stock</Label>
                    <Select defaultValue={product.inStock ? "In Stock" : "Out of Stock"}>
                        <Option>In Stock</Option>
                        <Option>Out of Stock</Option>
                    </Select>
                </Attribute>
                <Attribute>
                    <Label>Colors</Label>
                    <CheckboxContainer>
                        {
                            colors.map(curr_color => {
                                if(product.color.includes(curr_color)){
                                    return (
                                        <CheckboxContainerItem>
                                            <Label>{curr_color}</Label>
                                            <Input type='checkbox' checked value={curr_color} />
                                        </CheckboxContainerItem>
                                    )
                                }

                                return (
                                    <CheckboxContainerItem>
                                        <Label>{curr_color}</Label>
                                        <Input type='checkbox' value={curr_color} />
                                    </CheckboxContainerItem>
                                )
                            })
                        }
                    </CheckboxContainer>
                </Attribute>
                <Attribute>
                    <Label>Sizes</Label>
                    <CheckboxContainer>
                        {
                            sizes.map(curr_size => {
                                if(product.size.includes(curr_size)){
                                    return (
                                        <CheckboxContainerItem>
                                            <Label>{curr_size}</Label>
                                            <Input type='checkbox' checked value={curr_size} />
                                        </CheckboxContainerItem>
                                    )
                                }
                                
                                return (
                                    <CheckboxContainerItem>
                                        <Label>{curr_size}</Label>
                                        <Input type='checkbox' value={curr_size} />
                                    </CheckboxContainerItem>
                                )
                            })
                        }
                    </CheckboxContainer>
                </Attribute>
                <Attribute>
                    <Label>Categories</Label>
                    <CheckboxContainer>
                        {
                            categories.map(curr_category => {
                                if(product.category.includes(curr_category)){
                                    return (
                                        <CheckboxContainerItem>
                                            <Label>{curr_category}</Label>
                                            <Input type='checkbox' checked value={curr_category} />
                                        </CheckboxContainerItem>
                                    )
                                }
                                
                                return (
                                    <CheckboxContainerItem>
                                        <Label>{curr_category}</Label>
                                        <Input type='checkbox' value={curr_category} />
                                    </CheckboxContainerItem>
                                )
                            })
                        }
                    </CheckboxContainer>
                </Attribute>
                <Attribute>
                    <Label>Image</Label>
                    <Input type='file' />
                </Attribute>
                <ButtonGroup>
                    <Reset>RESET</Reset>
                    <Submit>UPDATE</Submit>
                </ButtonGroup>
            </Form>
        </Container>
    )
}

export default EditProduct