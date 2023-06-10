const Pierwsza = ['Ja chcę powiedzieć jedną rzecz:', 'Trzeba powiedzieć jasno:', 'Jak powiedział wybitny krakowianin Stanisław Lem.', 'Proszę mnie dobrze zrozumieć:', 'Ja chciałem państwu przypomnieć ze', 'Niech państwo nie mają złudzeń:', 'Powiedzmy to wyraźnie:']
const Druga = ['przedstawiciele czerwonej hołoty', 'ci wszyscy (tfu!) geje', 'funkcjonańusze reżymowej telewizji', 'tak zwani ekolodzy', 'ci wszyscy (tfu!) demokraci', 'agenci bezpieki', 'feminazistki']
const Trzecia = ['zupełnie bezkarnie', 'całkowicie bezczelnie', 'o poglądach na lewo od komunizmu', 'celowo i świadomie', 'z premedytacją', 'od czasów Okrągłego Stołu', 'w ramach postępu']
const Czwarta = ['nawołują do podniesienia podatków', 'próbują wyrzucić kierowców z miast', 'próbują skłócić Polskę z Rosją ', 'głoszą brednie o globalnym ociepleniu', 'zakazują posiadania broni', 'nie dopuszczają prawicy do władzy', 'uczą dzieci homoseksualizmu']
const Piąta = ['bo dzięki temu mogą kraść', 'bo dostają za to pieniądze', 'bo tak się uczy w państwowej szkole', 'bo bez tego (tfu!) demokracja nie moze istnieć', 'bo głupich jest więcej nit mądrych', 'bo chcą tworzyć raj na ziemi', 'bo chcą niszczyć cywilizację białego człowieka']
const Szósta = ['przez kolejne kadencje', 'o czym się nie mówi', 'i właśnie dlatego Europa umiera', 'ale przyjdą muzułmanie i zrobią porządek', 'tak samo zresztą Jak za Hitlera', 'proszę zobaczyć, co się dzieje na Zachodzie, jeśli mi państwo nie wierzą', 'co lat temu sto nikomu nie przyszłoby nawet do głowy']

const zdanie = () => {
    const num1 = () => {
        return Math.floor(Math.random()*7)
    }

    const num2 = () => {
        return Math.floor(Math.random()*7)
    }

    const num3 = () => {
        return Math.floor(Math.random()*7)
    }

    const num4 = () => {
        return Math.floor(Math.random()*7)
    }

    const num5 = () => {
        return Math.floor(Math.random()*7)
    }

    const num6 = () => {
        return Math.floor(Math.random()*7)
    }

    console.log(`${Pierwsza[num1()]} ${Druga[num2()]} ${Trzecia[num3()]} ${Czwarta[num4()]} ${Piąta[num5()]} ${Szósta[num6()]} `)
    
    return ''
}
console.log(zdanie())
