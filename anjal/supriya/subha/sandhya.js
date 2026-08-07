
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background: linear-gradient(145deg, #f7f0fc 0%, #e9def0 100%);
      min-height: 100vh;
      padding: 2rem 1.5rem;
      color: #1e1a2b;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .container {
      max-width: 1280px;
      width: 100%;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-radius: 3rem;
      padding: 2.8rem 2.8rem 2.5rem;
      box-shadow: 0 30px 80px rgba(98, 70, 130, 0.18), 0 8px 32px rgba(0, 0, 0, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.5);
    }

    /* header */
    .header {
      text-align: center;
      padding-bottom: 2rem;
      border-bottom: 1px solid rgba(118, 75, 162, 0.12);
      margin-bottom: 2.5rem;
    }

    .header h1 {
      font-size: 2.8rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      background: linear-gradient(135deg, #5b3b8c 0%, #8b5fbf 70%, #b18ad9 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.3rem;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }
    .header h1 i { -webkit-text-fill-color: initial; color: #7c5c9e; font-size: 2.4rem; }
    .header p { color: #4b3a5e; font-weight: 450; font-size: 1.1rem; opacity: 0.8; }

    .current-time {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(4px);
      padding: 0.6rem 1.8rem;
      border-radius: 60px;
      margin-top: 1.2rem;
      font-size: 1.1rem;
      font-weight: 550;
      color: #2f2340;
      border: 1px solid rgba(118, 75, 162, 0.15);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
    }
    .live-indicator {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: #3cb371;
      border-radius: 50%;
      animation: pulse 2.2s infinite;
      box-shadow: 0 0 0 2px rgba(60, 179, 113, 0.2);
    }
    @keyframes pulse {
      0% { opacity: 0.7; transform: scale(0.95); }
      50% { opacity: 1; transform: scale(1.2); }
      100% { opacity: 0.7; transform: scale(0.95); }
    }

    /* section titles */
    .section-title {
      font-size: 1.6rem;
      font-weight: 600;
      color: #1f1730;
      margin: 2.2rem 0 0.6rem 0;
      padding-left: 0.8rem;
      border-left: 6px solid #9b7fc7;
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }
    .section-title i { color: #7b5ea0; font-size: 1.5rem; }
    .section-subtitle {
      color: #5e4b76;
      margin: -0.2rem 0 1.2rem 1.4rem;
      font-weight: 400;
      font-size: 0.98rem;
      opacity: 0.7;
    }

    /* grid & cards */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 1.4rem;
      margin-bottom: 1.8rem;
    }

    /* --- card with absolute positioned copy button (top-right) --- */
    .card {
      position: relative;
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border-radius: 1.8rem;
      padding: 1.5rem 1.4rem 1.4rem;
      transition: all 0.2s cubic-bezier(0.2, 0, 0, 1);
      border: 1px solid rgba(255, 255, 255, 0.6);
      box-shadow: 0 6px 18px rgba(90, 60, 130, 0.04);
      overflow: visible;
    }
    .card:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(98, 70, 130, 0.10);
      background: rgba(255, 255, 255, 0.7);
      border-color: rgba(155, 127, 199, 0.25);
    }

    /* copy button – top right corner, inside card */
    .card .copy-btn-top {
      position: absolute;
      top: 10px;
      right: 14px;
      background: rgba(200, 180, 220, 0.25);
      backdrop-filter: blur(2px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: #3f2a57;
      font-size: 0.7rem;
      font-weight: 500;
      padding: 0.2rem 0.8rem;
      border-radius: 40px;
      cursor: pointer;
      transition: 0.15s;
      display: flex;
      align-items: center;
      gap: 4px;
      letter-spacing: 0.3px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.02);
      opacity: 0.6;
    }
    .card .copy-btn-top i {
      font-size: 0.65rem;
      color: #4d3468;
    }
    .card .copy-btn-top:hover {
      background: rgba(150, 120, 190, 0.3);
      opacity: 1;
      border-color: #9b7fc7;
      transform: scale(1.02);
    }
    .card .copy-btn-top.copied {
      background: #8b6eb0;
      color: white;
      border-color: #8b6eb0;
      opacity: 1;
    }
    .card .copy-btn-top.copied i {
      color: white;
    }

    .card h3 {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.6px;
      color: #5e4a76;
      margin-bottom: 0.5rem;
      font-weight: 600;
      border-bottom: 1px dashed rgba(118, 75, 162, 0.12);
      padding-bottom: 0.45rem;
      padding-right: 3rem; /* space for the button */
    }
    .card .label {
      font-size: 0.75rem;
      color: #6b5a7e;
      margin-bottom: 0.2rem;
      font-weight: 450;
      letter-spacing: 0.3px;
    }
    .card .value {
      font-size: 1.7rem;
      font-weight: 650;
      color: #1d132b;
      padding: 0.2rem 0 0.2rem;
      letter-spacing: -0.01em;
      line-height: 1.3;
      word-break: break-word;
    }
    .card .format {
      font-size: 0.7rem;
      font-family: 'SF Mono', 'Menlo', 'Cascadia Code', monospace;
      background: rgba(180, 150, 210, 0.12);
      padding: 0.2rem 0.7rem;
      border-radius: 30px;
      display: inline-block;
      margin-top: 0.3rem;
      color: #3d2b52;
      letter-spacing: 0.2px;
      border: 1px solid rgba(118, 75, 162, 0.08);
      backdrop-filter: blur(2px);
    }

    /* language grid */
    .lang-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
      gap: 1rem;
      margin: 1.2rem 0 1.8rem;
    }
    .lang-card {
      position: relative;
      background: rgba(255, 255, 255, 0.45);
      backdrop-filter: blur(4px);
      border-radius: 2rem;
      padding: 1.2rem 0.8rem;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.5);
      transition: all 0.18s ease;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.01);
    }
    .lang-card:hover {
      background: rgba(255, 255, 255, 0.7);
      border-color: #b392d6;
      transform: scale(1.01);
      box-shadow: 0 10px 28px rgba(118, 75, 162, 0.08);
    }
    .lang-card .lang-code {
      font-size: 0.7rem;
      font-weight: 600;
      color: #4b3662;
      background: rgba(200, 175, 225, 0.25);
      padding: 0.1rem 1rem;
      border-radius: 30px;
      display: inline-block;
      margin-bottom: 0.4rem;
      letter-spacing: 0.5px;
    }
    .lang-card .lang-name {
      font-weight: 550;
      font-size: 0.9rem;
      color: #2d1f3d;
      margin-bottom: 0.3rem;
    }
    .lang-card .date-display {
      font-size: 1rem;
      font-weight: 500;
      color: #1f112f;
      background: rgba(255, 255, 255, 0.5);
      padding: 0.3rem 0.2rem;
      border-radius: 40px;
      backdrop-filter: blur(2px);
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
    /* copy button for lang cards also top-right */
    .lang-card .copy-btn-top {
      position: absolute;
      top: 6px;
      right: 10px;
      background: rgba(200, 180, 220, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: #3f2a57;
      font-size: 0.6rem;
      font-weight: 500;
      padding: 0.1rem 0.6rem;
      border-radius: 40px;
      cursor: pointer;
      transition: 0.15s;
      display: flex;
      align-items: center;
      gap: 3px;
      opacity: 0.5;
      backdrop-filter: blur(2px);
    }
    .lang-card .copy-btn-top i {
      font-size: 0.6rem;
    }
    .lang-card .copy-btn-top:hover {
      opacity: 1;
      background: rgba(150, 120, 190, 0.3);
      border-color: #9b7fc7;
    }
    .lang-card .copy-btn-top.copied {
      background: #8b6eb0;
      color: white;
      border-color: #8b6eb0;
      opacity: 1;
    }
    .lang-card .copy-btn-top.copied i { color: white; }

    .full-width {
      grid-column: 1 / -1;
    }

    /* footer */
    .footer {
      margin-top: 3rem;
      padding-top: 1.8rem;
      border-top: 1px solid rgba(118, 75, 162, 0.12);
      text-align: center;
      color: #4d3a62;
    }
    .footer .copyright {
      font-size: 1.05rem;
      font-weight: 450;
      margin-bottom: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      flex-wrap: wrap;
    }
    .footer .copyright span { color: #6b3f94; font-weight: 600; }
    .badge {
      background: #6b3f94;
      color: white;
      padding: 0.1rem 0.9rem;
      border-radius: 60px;
      font-size: 0.65rem;
      font-weight: 600;
      letter-spacing: 0.3px;
    }
    .footer .info {
      font-size: 0.9rem;
      color: #69547e;
      opacity: 0.7;
      margin-top: 0.2rem;
    }
    .footer .info:last-of-type {
      font-size: 0.75rem;
      opacity: 0.5;
      margin-top: 0.4rem;
    }

    @media (max-width: 760px) {
      .container { padding: 1.8rem 1.2rem; border-radius: 2rem; }
      .header h1 { font-size: 2.1rem; }
      .grid { grid-template-columns: 1fr 1fr; gap: 1rem; }
      .lang-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 480px) {
      .grid { grid-template-columns: 1fr; }
      .lang-grid { grid-template-columns: 1fr; }
      .container { padding: 1.2rem 0.8rem; }
      .card .value { font-size: 1.4rem; }
    }
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #ede6f3; border-radius: 20px; }
    ::-webkit-scrollbar-thumb { background: #b392d6; border-radius: 20px; }
  