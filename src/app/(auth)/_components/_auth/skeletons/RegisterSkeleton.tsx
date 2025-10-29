import AuthContainer from "../AuthContainer";
import { skeletonStyles } from "../../../_styles/skeletonStyles";  

export default function RegisterSkeleton() {
  const { auth, form } = skeletonStyles;

  return (
    <AuthContainer>
      <div className={auth.header.container}>
        <div className={auth.header.title}></div>
        <div className={auth.header.subtitle}></div>
      </div>
      
      <div className={form.container}>
        <div className={form.field}>
          <div className={form.label}></div>
          <div className={form.input}></div>
        </div>
        
        <div className={form.field}>
          <div className={form.label}></div>
          <div className={form.input}></div>
        </div>
        
        <div className={form.field}>
          <div className={form.label}></div>
          <div className={form.input}></div>
        </div>
        
        <div className={form.flex.subcontainer1}>
          <div className={form.flex.animate1}></div>
          <div className={form.flex.animate2}></div>
        </div>
        
        <div className={form.button}></div>
      </div>
      
      <div className={auth.footer.container}>
        <div className={auth.footer.text}></div>
      </div>
    </AuthContainer>
  );
}
