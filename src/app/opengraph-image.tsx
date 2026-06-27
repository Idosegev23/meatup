import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Brand share card (WhatsApp / Facebook / LinkedIn / iMessage link previews)
export const alt = 'MEATUP — Grill Burger & More';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  // logofull.png = bronze "MEAT" + cream "UP" on transparent — designed for dark backgrounds
  const logo = await readFile(join(process.cwd(), 'public', 'logofull.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1A1A1A',
          position: 'relative',
        }}
      >
        {/* Bronze frame */}
        <div
          style={{
            position: 'absolute',
            top: 28,
            right: 28,
            bottom: 28,
            left: 28,
            border: '2px solid #BF9B7A',
            borderRadius: 10,
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={412} height={420} style={{ objectFit: 'contain' }} alt="" />

        {/* Bronze subtitle */}
        <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 44, height: 2, backgroundColor: '#BF9B7A' }} />
          <div style={{ color: '#BF9B7A', fontSize: 26, letterSpacing: 8, fontWeight: 700 }}>
            KOSHER GRILL · BNEI BRAK
          </div>
          <div style={{ width: 44, height: 2, backgroundColor: '#BF9B7A' }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
