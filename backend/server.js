:root{--bg:#f5f7fb;--card:#ffffff;--accent:#0b63d6;--muted:#6b7280}
body{font-family:Inter,ui-sans-serif,system-ui,Arial,Helvetica,sans-serif;background:var(--bg);margin:0;padding:20px}
.container{max-width:900px;margin:0 auto}
header h1{margin:10px 0;color:#111;font-size:22px}
.card{background:var(--card);border-radius:12px;padding:18px;margin:18px 0;box-shadow:0 2px 10px rgba(12,15,20,0.04)}
label{display:block;margin-top:10px;font-weight:600;color:#222}
input,textarea,select{width:100%;padding:10px;border:1px solid #e6e9ef;border-radius:8px;margin-top:6px;font-size:15px}
button{background:var(--accent);color:#fff;padding:10px 14px;border:none;border-radius:8px;font-weight:700;margin-top:12px;cursor:pointer}
button:active{transform:translateY(1px)}
.qr-area{display:flex;gap:20px;align-items:center;flex-wrap:wrap;margin-top:16px}
#qrcode{width:220px;height:220px;padding:8px;background:#fff;border-radius:8px;display:flex;align-items:center;justify-content:center}
.muted{color:var(--muted);font-size:13px}
.hidden{display:none}
footer{margin-top:20px;text-align:center}
