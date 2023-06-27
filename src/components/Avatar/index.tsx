import styles from './Avatar.module.css'

interface avatarProps {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({src, hasBorder=true}: avatarProps) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src}
    />
  )
}