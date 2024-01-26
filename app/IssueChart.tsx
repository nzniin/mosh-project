'use client';
import { Card } from '@radix-ui/themes';
import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';


interface Props{
    open: number;
    inProgress: number;
    closed: number;
}


function IssueChart({ open, inProgress, closed}: Props) {
    const data = [
        { label: 'OPEN', value: 'open'},
        { label: 'CLOSED', value: 'closed'},
        { label: 'IN_PROGRESS', value: 'inProgress'}
    ]


  return (
    <Card>
        <ResponsiveContainer width='100%' height={300}>
            <BarChart data={data}>
                <XAxis dataKey='label' />
                <YAxis />
                <Bar dataKey='value' barSize={60} style={{ fill: 'var(--accent-9)'}} />
            </BarChart>
        </ResponsiveContainer>
    </Card>
  )
}

export default IssueChart