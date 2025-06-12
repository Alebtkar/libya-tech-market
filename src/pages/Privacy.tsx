
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <motion.h1 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          سياسة الخصوصية
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>حماية خصوصيتك أولوية لدينا</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-arabic max-w-none">
              <div className="space-y-6 text-right" dir="rtl">
                <section>
                  <h2 className="text-xl font-semibold mb-3">جمع المعلومات</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نحن في متجر ليبيا نجمع المعلومات التي تقدمها لنا مباشرة عند إنشاء حساب، أو إجراء عملية شراء، أو الاتصال بنا. هذه المعلومات تشمل الاسم، وعنوان البريد الإلكتروني، ورقم الهاتف، وعنوان الشحن.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">استخدام المعلومات</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نستخدم المعلومات التي نجمعها لمعالجة طلباتك، وتحسين خدماتنا، والتواصل معك بشأن طلباتك أو خدماتنا. لن نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك الصريحة.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">أمان المعلومات</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نتخذ تدابير أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح أو الإتلاف. نستخدم تقنيات التشفير وبروتوكولات الأمان المتقدمة.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">ملفات الارتباط (Cookies)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    نستخدم ملفات الارتباط لتحسين تجربتك على موقعنا، وحفظ تفضيلاتك، وتحليل استخدام الموقع. يمكنك إدارة إعدادات ملفات الارتباط من خلال متصفحك.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">حقوقك</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها أو حذفها. كما يمكنك إلغاء الاشتراك في رسائلنا الإلكترونية في أي وقت. للاستفسارات حول خصوصيتك، اتصل بنا على info@libyastore.ly
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">التحديثات</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإشعارك بأي تغييرات مهمة عبر البريد الإلكتروني أو من خلال إعلان على موقعنا.
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

export default Privacy;
