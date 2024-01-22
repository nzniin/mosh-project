import { Pencil2Icon } from '@radix-ui/react-icons'
import { Button, Link } from '@radix-ui/themes'
import React from 'react'

const EditIssueButton = ({ issueId }: { issueId: number}) => {
  return (
    <Button>
        <Pencil2Icon />
        <Link href={`/issues/${issueId}/edit`}></Link>                
        Edit issue
    </Button>
  )
}

export default EditIssueButton