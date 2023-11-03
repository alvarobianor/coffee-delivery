import { ReactNode } from 'react';
import { LocationLabel, PropsLocationLabel } from './styled';

type Props = { location: string; icon?: ReactNode } & PropsLocationLabel;

export function Location({ location, icon, $background, $color }: Props) {
    return (
        <LocationLabel $background={$background} $color={$color}>
            {icon ? (
                <>
                    {icon} {location}
                </>
            ) : (
                <>{location}</>
            )}
        </LocationLabel>
    );
}
