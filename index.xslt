<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:output method="html" />
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>AlShai5</title>
        <meta name="description" content="Abdullah H. AlShaikh" />
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="css/normalize.css" />
        <link rel="stylesheet" href="css/main.css" />
        <link href='//fonts.googleapis.com/css?family=Oleo+Script+Swash+Caps|BenchNine:300,400'
          rel='stylesheet'
          type='text/css' />
        <link type="text/plain" rel="author" href="humans.txt" />
        <!-- <script defer="defer" src="js/plugins.js"></script> -->
        <!-- <script defer="defer" src="js/main.js"></script> -->
      </head>
      <body style="background: {/cv/background}">
        <article class="wrapper" style="background: {/cv/foreground}; display: block;">
          <header>
            <div class="profileimg">
              <div style="background: {/cv/background}"></div>
              <div>
                <img src="{/cv/profile/image}" width="150" height="150" alt="Profile Image" />
              </div>
            </div>
            <h1>
              <xsl:value-of select="/cv/profile/name" />
            </h1>
          </header>
          <section class="connect">
            <h1>Connect</h1>
            <ul class="inline">
              <xsl:for-each select="/cv/socials/*">
                <li>
                  <a href="{url}">
                    <img src="{image}" width="50" height="50" alt="{name}" />
                    <span>
                      <xsl:value-of select="name" />
                    </span>
                  </a>
                </li>
              </xsl:for-each>
            </ul>
          </section>
          <div class="clearfix"></div>
          <xsl:for-each select="/cv/sections/*">
            <section>
              <xsl:copy-of select="." />
            </section>
          </xsl:for-each>
        </article>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>