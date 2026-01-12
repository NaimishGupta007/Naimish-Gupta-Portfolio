import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
    });

    if (error) {
      alert(error.message);
    } else {
      setSent(true);
    }

    setLoading(false);
  };

  if (sent) {
    return <p>📩 Magic link sent to your email</p>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Login</h1>

      <Input
        placeholder="Admin email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Button onClick={handleLogin} disabled={loading}>
        Login
      </Button>
    </div>
  );
}
