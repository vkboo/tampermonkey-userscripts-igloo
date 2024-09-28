import * as React from 'react';
import type { FC } from 'react';
import { cn, getOS } from '@/lib/utils'
import { Input } from '@/components/ui/input';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

type Props = {
    className?: string;
    hotKey?: string;
}

const os = getOS();

const SearchBox: FC<Props> = ({
    className,
}) => {
    const [hotKey] = React.useState(() => {
        const osKey = os === 'Windows' ? 'Win' : (os === 'macOS' ? '⌘' : null);
        return osKey ? `${osKey} K` : osKey;
    });

    return (
        /**
         * TODO
         * 1. 初始需要透明
         * 2. focus/hover input的样式问题
         * 3. 快捷键的使用
         * 4. hostKey部分，在已经有搜索值的时候，改成"Esc"
         */
        // opacity-65
        <div className={cn(
            'inline-flex items-center justify-center gap-1 w-72 bg-slate-800 hover:bg-slate-700 px-3 rounded-md',
            className
        )}>
            <MagnifyingGlassIcon className="text-slate-400" width={24} height={24} />
            <Input
                className="focus:opacity-100 transition-all border-none px-0 rounded-none hover:bg-inherit flex-1"
                placeholder='Quick search...'
            />
            <span className="text-slate-500 text-sm">
                {hotKey}
            </span>

        </div>
    );
}

export default SearchBox;
