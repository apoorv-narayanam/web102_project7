// supabaseClient.js
import { createClient } from '@supabase/supabase-js';


const REACT_APP_SUPABASE_URL="https://cywjprfkvkjlnaeerxyp.supabase.co"
const REACT_APP_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5d2pwcmZrdmtqbG5hZWVyeHlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1NTIxMTMsImV4cCI6MjA0NjEyODExM30.2VZdj939c31kSWomm7SC2vHk93-tXrVwOwDBYBfW3vw"
        

export const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY);