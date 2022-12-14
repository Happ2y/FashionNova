// dependencies
import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { userRequests } from '../requests' // request methods
import { months } from '../data' // miscelleneous data

// styling components
const Container = styled.div`
    padding: 0px 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

const Chart = () => {
    const user = useSelector(state => state.user.currentUser)
    const admin = user ? user.isAdmin : false

    const [latest_users, setter] = useState([])
    useEffect(() => {
        const getter = async () => {
            const response = await userRequests.get("/users/stats")

            let monthly_registrations_stats = []
            response.data.map((item) => {
                monthly_registrations_stats.push({
                    "key": item._id - 1,
                    "name": months[item._id - 1],
                    "total": item.total
                })
            })

            setter(monthly_registrations_stats.sort((a, b) => a.key - b.key))
        }

        admin && getter()
    }, [admin])

    return (
        <Container>
            <h3>User Analytics (Month & New Users)</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    data={latest_users}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default Chart