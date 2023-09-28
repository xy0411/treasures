import JSEncrypt from "jsencrypt";

const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6zMXvTNyf88CvJXwXCWZ
uJ28oMDN7Nf+jFEqTDFYM6sTSEAmbx16Qc1qXK0nbxgSV1FRMDc1/nzxSrwruyGk
xPcy6goe/dSRgY1dk9yCtMNfUoGtW9RE+MfsDyEmd1xAaAFMkigdkuETsIvtB82Z
9XwKtKFE0JMZhG5dtlKzzvTWKev28A0Ddu3Kc4yuWqGDbVrrwqKiEN39tgVO11+q
KsSEEkIZUpRR5lDDhSXOCpj6TXE+drWm63I3RiU2IshYqxFUv0zA4xEiZv+IFIP5
zhOQLNsBvfgl/lN2pHGzrQ1FNyoipubpkdXK9xN0oDL1o4FnWiBVC6vT49OwruI2
awIDAQAB
-----END PUBLIC KEY-----
`

const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDrMxe9M3J/zwK8
lfBcJZm4nbygwM3s1/6MUSpMMVgzqxNIQCZvHXpBzWpcrSdvGBJXUVEwNzX+fPFK
vCu7IaTE9zLqCh791JGBjV2T3IK0w19Sga1b1ET4x+wPISZ3XEBoAUySKB2S4ROw
i+0HzZn1fAq0oUTQkxmEbl22UrPO9NYp6/bwDQN27cpzjK5aoYNtWuvCoqIQ3f22
BU7XX6oqxIQSQhlSlFHmUMOFJc4KmPpNcT52tabrcjdGJTYiyFirEVS/TMDjESJm
/4gUg/nOE5As2wG9+CX+U3akcbOtDUU3KiKm5umR1cr3E3SgMvWjgWdaIFULq9Pj
07Cu4jZrAgMBAAECggEBAMcLw1BchM8DO1asMfFZ5OEnpOYKpXuGRCct3XUD4ZhA
dJ4VpDEvKjMcC6KI67GKFqOM7v+2Cdzoki/kVcIVs+L5LT6B+D5qsgWIxKQI3xjp
qvchRbxMRV6hmvYm4O3sxZj/WHTsvDJ8hvRHRv7ukhf9tPWu8ZTumI7J9EcDcKZ4
UI5MZD/o5Ua7VGiiqMiyUIOI+xnSt9hbz7m9BArQCuECAyFIaMRcarhlN4tdBndm
0AlZ6LNbztTbmr84AWpnRNFR23Zl069HC15EpsGb+MGVtd61lO1vqzZt6XqfHDP0
SkYpiu/Oggzw6pb/zAHbo3WiIQc3OCguEVV7jJagxcECgYEA+bmsX8cS8rmF9NNE
eGiTT/hRoJ/tSaeDggXRY/oCeXlZPBWQam7+21CCt5pjsikwFUEYCAQJLyIZmTFN
pY39XY+cTwArtnMqnLEwHrnBGVQNe5RoMCXUV4jdpm8EQl9babDwEDZfrRjwKBK8
SmjBsbZtjxTcfPuOwIGo3GPpi6ECgYEA8Rv8D3ZGbS9DPGwbIvbT4E01uKARFW7T
GsZU5Je/8uz3cfmC6YJiw5zYFgEWGMbb6A1jJAtAkOlHtRr0UU2HMaAEQL9ur35i
wVa+0DuBSnR23Nvus25BHPUY6L0W0hzYOgh5JRzvonHSQdaWrBJE8asq2Kp6CioW
8sVlXEnpposCgYEA76d+g1QbHRFqOvBdL2i8puxZ+dpA8IRwMmG+90FBCq6oMn9H
Xr0ym+qB6A2kS6A3Ys5bb6Xf4nnJMzkbmRvQ4O8nRLGXQbr4U/O/iF0fsVz2q3hb
HInRZEgW3th/r+qvYZjKaeSkoQvjvbFtPcOWzyORtNSCXPdVoe1MzmScBsECgYEA
nrfzWCJd/iYstqvbuUqO84sgICeO13MbGPcSj2CuBTalNaww15LzfR3UybdxWmIe
BUY6y1F08W//umLCDntg0fQqmIzsSi6CyA9YkS96zw6X6JAHNKsRxgQ6n4tKaIqA
dMN7LEk+Hsuaw6iFi0SDiitJi1O9/s7ySGJVdUlavD0CgYAVeCt1gEF7wnGpQwmW
+10/t6nGP9TiWUT01+a0+q3FA2AoWzEK+jpVGWaSm7RYWyG3koHOkCwhv96Qhw/U
1/YYLLehPQMd63o2bYsi/SAX8+0IF7Kao6syY89TgGkBnHHMBxlFt+wdSb3NAVV+
/1o9w9lV3w+/v0AmSSTTLgvZoA==
-----END PRIVATE KEY-----
`

// 加密
export function encrypt(txt) {
    const encryptor = new JSEncrypt()

    encryptor.setPublicKey(publicKey)

    return encryptor.encrypt(txt)
}

// 解密
export function decrypt(txt) {
    const encryptor = new JSEncrypt()

    encryptor.setPrivateKey(privateKey)

    return encryptor.decrypt(txt)
}