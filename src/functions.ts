function introduction(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(' ')}`;
}

const a = introduction('hello', 'Pete', 'Pablo');
console.log(a)

//do not need to put here anything cuz I know basics already.