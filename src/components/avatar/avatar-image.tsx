import { cn } from "@/lib/utils"
import Image, { ImageProps } from "next/image"

type AvatarSize = 'xs' | 'sm'

type AvatarImageProps = Omit<ImageProps, 'width' | 'height'> & {
  size?: AvatarSize
}

const avatarSize = {
  xs: 'size-7',
  sm: 'size-9',
}

export const AvatarImage = ({ size = 'sm', ...props }: AvatarImageProps) => {
  return (
    <div className={cn(
      'relative overflow-hidden rounded-full border-2 border-blue-200',
      avatarSize[size]
    )}>
      <Image {...props} fill />
    </div>
  )
}