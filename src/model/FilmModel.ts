import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

@Entity("movie")
export class FilmModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  episode_id: number;
  @Column()
  opening_crawl: string;
  @Column()
  director: string;
  @Column()
  producer: string;
  @Column({
    type: "date",
  })
  release_date: string;
  @Column({ type: "simple-array", default: [] })
  characters: string[];
  @CreateDateColumn({
    type: "date",
  })
  created: string;
  @UpdateDateColumn({
    type: "date",
  })
  edited: string;
  @Column()
  url: string;
 
}
