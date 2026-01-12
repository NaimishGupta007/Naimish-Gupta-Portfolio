import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching messages:", error);
      } else {
        setMessages(data || []);
      }

      setLoading(false);
    };

    fetchMessages();
  }, []);

  if (loading) return <p>Loading messages...</p>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>📩 Contact Messages</h1>

      {messages.length === 0 && <p>No messages yet.</p>}

      {messages.map((msg) => (
        <div
          key={msg.id}
          style={{
            border: "1px solid #ddd",
            padding: "16px",
            marginTop: "12px",
            borderRadius: "8px",
          }}
        >
          <p><strong>Name:</strong> {msg.name}</p>
          <p><strong>Email:</strong> {msg.email}</p>
          <p><strong>Message:</strong> {msg.message}</p>
          <p style={{ fontSize: "12px", color: "#666" }}>
            {new Date(msg.created_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
