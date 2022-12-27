// Default <head> tags we want shared across the app
'use client';
export function DefaultTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/img/icon.png" />
      <link rel="apple-touch-icon" href="/img/icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="description" content="App Name" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#317EFB" />
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="author" content="" />
      </>
  )
}
