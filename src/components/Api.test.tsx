import { render, screen, waitFor } from "@testing-library/react";
import Api from "./Api"; 
import React from "react";
import axios from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API Call', () => {
  it('render loading state', () => {
    render(<Api />)
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it('successful API call', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]
    });

    render(<Api />);

    await waitFor(() => expect(screen.getByText(/Post 1/i)).toBeInTheDocument());
    expect(screen.getByText(/Post 2/i)).toBeInTheDocument();

    expect(screen.queryByText(/Loading/i)).toBeNull();
  });

  it('failed API call', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("API call failed"));

    render(<Api />);

    await waitFor(() => expect(screen.getByText(/Error/i)).toBeInTheDocument());

    expect(screen.queryByText(/Loading/i)).toBeNull();
  });
});