'use client'
import { useAuth } from '@payloadcms/ui'
import React from 'react'

export const MyAvatar: React.FC = () => {
  const { user } = useAuth()
  return <p>{user ? user.email : 'no user'}</p>
}
