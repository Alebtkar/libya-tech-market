
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          الشروط والأحكام
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>شروط استخدام متجر ليبيا</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-arabic max-w-none">
              <div className="space-y-6 text-right" dir="rtl">
                <section>
                  <h2 className="text-xl font-semibold mb-3">قبول الشروط</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    باستخدام موقع متجر ليبيا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يُرجى عدم استخدام موقعنا.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">استخدام الموقع</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    يُسمح لك باستخدام موقعنا للأغراض الشخصية والتجارية المشروعة فقط. يُمنع استخدام الموقع لأي أنشطة غير قانونية أو ضارة أو قد تضر بسمعة الموقع أو مستخدميه الآخرين.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">المنتجات والأسعار</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نبذل قصارى جهدنا لضمان دقة المعلومات المتعلقة بالمنتجات والأسعار، لكننا لا نضمن خلوها من الأخطاء. نحتفظ بالحق في تصحيح أي أخطاء وتعديل الأسعار دون إشعار مسبق.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">الطلبات والدفع</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    جميع الطلبات خاضعة للتأكيد والقبول من جانبنا. نحتفظ بالحق في رفض أو إلغاء أي طلب لأي سبب. الدفع متاح نقداً عند الاستلام حالياً، وقد نضيف طرق دفع أخرى في المستقبل.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">التوصيل والإرجاع</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نقدم خدمة التوصيل المجاني داخل المدن المشمولة بالخدمة. يحق لك إرجاع المنتجات خلال 7 أيام من تاريخ الاستلام في حالة وجود عيب في المنتج أو عدم مطابقته للوصف.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">المسؤولية</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    متجر ليبيا غير مسؤول عن أي أضرار مباشرة أو غير مباشرة قد تنجم عن استخدام الموقع أو المنتجات، باستثناء ما ينص عليه القانون المحلي.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">التواصل</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    لأي استفسارات حول هذه الشروط والأحكام، يمكنكم التواصل معنا عبر البريد الإلكتروني: info@libyastore.ly أو الهاتف: +218 91 234 5678
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Terms;
