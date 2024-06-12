const mailConfirmation = (confirmCode: string) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>ILGG</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        width: 100% !important;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        margin: 0;
        padding: 0;
        line-height: 100%;
        background-color: #1d2033;
      }

      [style*='Roboto'] {
        font-family: 'Roboto', arial, sans-serif !important;
      }

      img {
        outline: none;
        text-decoration: none;
        border: none;
        -ms-interpolation-mode: bicubic;
        max-width: 100% !important;
        margin: 0;
        padding: 0;
        display: block;
      }

      table td {
        border-collapse: collapse;
      }

      table {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }

      .confirm-email-code:hover {
        background-color: #1c47a7;
      }
    </style>
  </head>

  <body style="margin: 0; padding: 0">
    <table
      role="presentation"
      class="container"
      width="100%"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      style="margin: 0 auto; padding-bottom: 50px"
    >
      <tr>
        <td>
          <table
            role="presentation"
            class="header-content"
            width="100%"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="
              margin: 0 auto;
              background-color: #121622;
              height: 50px;
              text-align: center;
            "
          >
            <tr>
              <td>
                <a
                  href="https://ilgg.ru"
                  style="
                    font-family: Arial, Helvetica, sans-serif, 'Roboto';
                    text-decoration: none;
                    color: #ffffff;
                    font-size: 30px;
                  "
                  >ILGG</a
                >
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="background-color: #1d2033; padding-top: 40px; padding-bottom: 40px">
          <table
            role="presentation"
            class="header-content"
            width="100%"
            cellpadding="0"
            cellspacing="0" 
            width="100%"
            style="background-color: #1d2033; margin: 0 auto"
          >
            <tr>
              <td>
                <p
                  style="
                    font-family: Arial, Helvetica, sans-serif, 'Roboto';
                    color: #c6c6c6;
                    text-align: center;
                    width: 300px;
                    margin: 0 auto;
                    line-height: 30px;
                  "
                >
                  Введите данный код подтверждения в форме подтверждения почты на сайте.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 25px">
                <a
                  class="confirm-email-code"
                  style="
                    font-family: Arial, Helvetica, sans-serif, 'Roboto';
                    text-decoration: none;
                    color: #ffffff;
                    font-size: 33px;
                    display: block;
                    margin: 0 auto;
                    width: 200px;
                    padding: 17px;
                    background-color: #3d79fc;
                    text-align: center;
                  "
                >
                  ${confirmCode}
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const textElement = document.getElementById('confirm-email-code');

            textElement.addEventListener('click', function () {
                const textToCopy = textElement.innerText;

                // Используем Clipboard API для копирования текста
                navigator.clipboard.writeText(textToCopy)
                    .then(() => {
                        console.log('Текст скопирован в буфер обмена!');
                    })
                    .catch(err => {
                        console.error('Произошла ошибка при копировании текста: ', err);
                    });
            });
        });
    </script>
  </body>
</html>
`
}

export default mailConfirmation
