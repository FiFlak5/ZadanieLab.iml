import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-motocykl',
    templateUrl: './motocykl.component.html',
    styleUrls: ['./motocykl.component.css']
})
export class MotocyklComponent implements OnInit {

    marka: string;
    model: string;
    rocznik: number;
    cena: string;
    pojemnosc: string;
    przebieg: string;
    rodzPaliwa: string;
    daneOsoby: Address;
    tasks: string[];
    editMode = false;

    constructor() {
    }

    ngOnInit(): void {
        this.marka = 'Honda';
        this.model = 'Hornet';
        this.rocznik = 2012;
        this.rodzPaliwa = 'Benzyna',
            this.pojemnosc = '600cm3',
            this.cena = '17 000';
        this.przebieg = '30 000 ',
            this.daneOsoby = {
                imie: 'Paweł',
                nazwisko: 'Nowak',
                ulica: 'Konstantnów',
                nrBudynku: '1 H',
                miasto: 'Lublin',
                email: 'email@małpa.pl',
                telefon: '782-147-333'
            };
        this.tasks = ['Nowy olej MOTUL 10w40 5100', 'Nowy filtr oleju', 'Wymieniony łańcuch na złoty', ' oraz wiele dodatków akcesoryjnych'];
    }

    addTask(task): void {
        this.tasks.push(task);
    }

    deleteTask(task): void {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i] === task) {
                this.tasks.splice(i, 1);
            }
        }
    }

    changeEditMode(): void {
        this.editMode = !this.editMode;

    }
}

interface Address {
    imie: string;
    nazwisko: string;
    ulica: string;
    nrBudynku: string;
    miasto: string;
    email: string;
    telefon: string;
}
