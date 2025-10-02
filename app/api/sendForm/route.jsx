export async function POST(req) {
  try {
    const data = await req.json();


    const scriptURL = process.env.GOOGLE_SCRIPT_URL
    const res = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("فشل الإرسال للـ Apps Script");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, message: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
