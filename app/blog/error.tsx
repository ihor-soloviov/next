'use client';

export default function Error({ error }: { error: Error }) {
return <h1>OOooops!! {error.message}</h1>
}