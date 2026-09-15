# 🛍️ متجر إلكتروني

متجر إلكتروني كامل مع جميع المميزات الأساسية.

## المميزات

✅ تسجيل دخول وتسجيل المستخدمين
✅ عرض المنتجات
✅ سلة التسوق
✅ معالجة الدفع بـ Stripe
✅ إدارة الطلبات
✅ نموذج الاتصال
✅ لوحة تحكم Admin

## المتطلبات

- Node.js >= 14
- MongoDB
- npm أو yarn

## التثبيت

```bash
# استنساخ المستودع
git clone https://github.com/mahfoudhamine56-ux/ecommerce-store.git
cd ecommerce-store

# تثبيت الحزم
npm install

# نسخ ملف البيئة
cp .env.example .env

# تعديل البيانات في ملف .env

# تشغيل السيرفر
npm start
```

## البنية

```
ecommerce-store/
├── config/          # إعدادات قاعدة البيانات
├── models/          # نماذج MongoDB
├── routes/          # مسارات API
├── middleware/      # البرامج الوسيطة
├── server.js        # ملف السيرفر الرئيسي
└── package.json     # المكتبات المستخدمة
```

## المسارات المتاحة

### التحقق والمستخدمين
- `POST /api/auth/register` - التسجيل
- `POST /api/auth/login` - تسجيل الدخول

### المنتجات
- `GET /api/products` - الحصول على جميع المنتجات
- `GET /api/products/:id` - الحصول على منتج واحد
- `POST /api/products` - إضافة منتج (Admin)
- `PUT /api/products/:id` - تحديث منتج (Admin)
- `DELETE /api/products/:id` - حذف منتج (Admin)

### السلة
- `GET /api/cart` - الحصول على السلة
- `POST /api/cart/add` - إضافة إلى السلة
- `POST /api/cart/remove` - إزالة من السلة

### الطلبات
- `POST /api/orders` - إنشاء طلب
- `GET /api/orders` - الحصول على طلبات المستخدم
- `GET /api/orders/:id` - الحصول على طلب واحد

### الدفع
- `POST /api/payments/process` - معالجة الدفع

### الاتصال
- `POST /api/contact` - إرسال رسالة الاتصال

## الترخيص

ISC

## المطور

محفوظ أمين
