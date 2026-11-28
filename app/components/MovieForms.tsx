"use client";
import {useState} from "react";
import { addMovie } from "../actions";

// component to make data inputs more consistent
interface DataInputProps {
    label: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
};
function DataInput({label, value, onChange}: DataInputProps) {
    return (
        <div>
            <label>
                {label}
            </label>
            <input 
                type="text"
                value={value}
                onChange={onChange}
                className="border"
            />
        </div>
    )
};

// component to create the core form used for adding or editing a movie
interface BaseMovieFormProps {
    confirmLabel: string,
    onConfirm: (
        title: string,
        releaseYear: string,
        actors: string[],
    ) => void,
};
function BaseMovieForm({confirmLabel, onConfirm}: BaseMovieFormProps) {
    // movie title use state
    const [title, setTitle] = useState("");
    const handleTitleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setTitle(event.target.value);
    };
    // release year use state
    const [releaseYear, setReleaseYear] = useState("");
    const handleReleaseYearChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setReleaseYear(event.target.value);
    };
    // actors use state
    const [actors, setActors] = useState([""]);
    const handleActorsChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        targetIndex: number,
    ) => {
        setActors(actors.map((actor: string, index: number) => {
            if (index === targetIndex) {
                return event.target.value;
            };
            return actor;
        }));
    };
    const handleRemoveActorByIndex = (targetIndex: number) => {
        // goes through the list, filtering so the setActors is given actors without the actor at the given index
        setActors(actors.filter((actor: string, index: number) => index != targetIndex))
    };
    const handleAddActor = () => {
        setActors([...actors, ""]);
    };
    // reset all values in the form
    const handleClear = () => {
        setTitle("");
        setReleaseYear("");
        setActors([""]);
    };
    // confirm button handler
    const handleConfirm = () => {
        // does nothing if any of the fields are empty
        if (title === "" || releaseYear === "" || actors.length === 0) {
            return;
        };
        // pass the values to the given onConfirm function
        onConfirm(title, releaseYear, actors);
        // reset the add card
        handleClear();
    };

    return (
        <div className="flex flex-col border p-2 bg-slate-50">
            {/* title input */}
            <DataInput 
                label="Movie Title"
                value={title}
                onChange={handleTitleChange}
            />
            {/* release year input */}
            <DataInput 
                label="Release Year"
                value={releaseYear}
                onChange={handleReleaseYearChange}
            />
            {/* list of actors */}
            <div>
                <p>Actors:</p>
                {actors.map((actor: string, index: number) => (
                    <div 
                        key={index}
                        className="flex flex-row"
                    >
                        <DataInput
                            label={String(index)}
                            value={actor}
                            onChange={(event) => (handleActorsChange(event, index))}
                        />
                        <button 
                            onClick={() => (handleRemoveActorByIndex(index))}
                            className="border"
                        >
                            Remove Actor
                        </button>
                    </div>
                ))}
            <button
                onClick={handleAddActor}
                className="border"
            >
                Add New Actor
            </button>
            </div>
            {/* confirm and cancel buttons */}
            <div> 
                <button
                    onClick={handleConfirm}
                    className="border"
                >
                    {confirmLabel}
                </button>
                <button
                    onClick={handleClear}
                    className="border"
                >
                    Cancel
                </button>
            </div>
        </div>
    )
};

// component for adding a movie
export function AddMovieForm() {
    const onAdd = (title:string, releaseYear:string, actors:string[]) => {
        addMovie(title, releaseYear, actors);
    };

    return (
        <BaseMovieForm 
            confirmLabel="Add Movie"
            onConfirm={onAdd}
        />
    )
};

// component for editing a movie
export function EditMovieForm() {
    return (
        <p>
            EDIT MOVIE
        </p>
        // <BaseMovieForm 
        //     confirmLabel="Update"
        //     onConfirm={}
        // />
    )
};