"use client"
import React from 'react'
import ProfileComponent
  from "@/src/app/(pages)/settings/components/ProfileComponent";
import "./index.css";
import useAuth from "@/src/hooks/useAuth";

function SettingsPage() {
  const isAuth = useAuth();
    if (!isAuth) return null;

  return (
      <main className={'flex items-center justify-center'}>
    <ProfileComponent />
      </main>
  )
}

export default SettingsPage
