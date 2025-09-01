import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = "https://SEU-PROJETO.supabase.co"
const supabaseKey = "SEU-CHAVE-ANON"
const supabase = createClient(supabaseUrl, supabaseKey)

// Exemplo: testar conexão
async function checkConnection() {
  const { data, error } = await supabase.from("users").select("*")
  if (error) {
    console.error("Erro:", error)
  } else {
    console.log("Usuários cadastrados:", data)
  }
}
checkConnection()
