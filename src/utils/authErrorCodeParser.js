export default function (errorCode) {
  switch (errorCode) {
    case 'auth/email-already-exists':
      return 'Sağlanan e-posta zaten mevcut bir kullanıcı tarafından kullanılıyor!';
    case 'auth/invalid-email':
      return 'Geçersiz mail adresi!';
    case 'auth/user-not-found':
      return 'Kullanıcı Bulunamadı!';
    case 'auth/weak-password':
      return 'Zayıf parola!';
    default:
      return errorCode;
  }
}
