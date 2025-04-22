export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          message: string
          created_at: string
          read: boolean
        }
        Insert: {
          id?: string
          name: string
          email: string
          message: string
          created_at?: string
          read?: boolean
        }
        Update: {
          id?: string
          name?: string
          email?: string
          message?: string
          created_at?: string
          read?: boolean
        }
      }
      email_subscribers: {
        Row: {
          id: string
          email: string
          created_at: string
          subscribed: boolean
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
          subscribed?: boolean
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
          subscribed?: boolean
        }
      }
    }
  }
}